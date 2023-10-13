interface IProps {
  params: {
    id: string;
  }
}

export default function NftPage({ params: {id}}: IProps) {
  return (
    <div>NFT Page ID: {id} </div>
  )
}
