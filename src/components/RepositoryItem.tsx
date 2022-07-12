interface RepositoryItemProps {
  repository: {
    name: string;
    git_url: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository?.git_url}</p>
      <a href={props.repository?.html_url}>Acessar repositório</a>
    </li>
  );
}
