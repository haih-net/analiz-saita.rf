vcl 4.1;
backend default { .host = "app"; .port = "3000"; }
sub vcl_recv {
  if (req.method != "GET" && req.method != "HEAD") { return (pass); }
  if (req.http.Authorization || req.http.Cookie) { return (pass); }
}
sub vcl_backend_response {
  if (beresp.status != 200 || beresp.http.Set-Cookie) { set beresp.uncacheable = true; return (deliver); }
}
sub vcl_deliver {
  if (obj.hits > 0) { set resp.http.X-Cache = "HIT"; }
  else { set resp.http.X-Cache = "MISS"; }
}
