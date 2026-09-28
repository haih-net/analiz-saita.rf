import { layers, type Solution } from './solutions'

function SolutionList({ items }: { items: Solution[] }) {
  return (
    <ul>
      {items.map((solution) => (
        <li key={solution.id} id={solution.id}>
          <p>
            <strong>
              <a href={`#${solution.id}`}>{solution.name}</a>
            </strong>{' '}
            — {solution.status}
          </p>
          <p>
            <strong>Provides:</strong> {solution.provides}
          </p>
          <p>
            <strong>Depends on:</strong> {solution.dependsOn}
          </p>
          {solution.children && <SolutionList items={solution.children} />}
        </li>
      ))}
    </ul>
  )
}

export default function SolutionsPage() {
  return (
    <>
      <h1 tabIndex={-1}>Solutions</h1>
      <p>
        Application → development and build → production runtime → optional
        deployment services.
      </p>
      <p>
        Start directly with <code>npm run dev</code>, or build and serve with{' '}
        <code>npm run build</code> then <code>npm run start</code>. Docker,
        Traefik and Varnish are optional.
      </p>
      <p>
        Nesting shows composition within each layer. Dependencies across layers
        are stated explicitly. “In use” describes this repository; it does not
        claim a comparative benchmark or complete verification.
      </p>
      <ul>
        {layers.map((layer) => (
          <li key={layer.id} id={layer.id}>
            <h2>
              <a href={`#${layer.id}`}>{layer.name}</a>
            </h2>
            <p>{layer.summary}</p>
            <SolutionList items={layer.solutions} />
          </li>
        ))}
      </ul>
    </>
  )
}
