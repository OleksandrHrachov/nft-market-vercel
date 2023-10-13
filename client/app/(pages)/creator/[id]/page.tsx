interface IProps {
  params: {
    id: string;
  }
}

export default function CreatorPage({ params: {id}}: IProps) {
  return (
    <div>CreatorPage ID: {id} </div>
  )
}
