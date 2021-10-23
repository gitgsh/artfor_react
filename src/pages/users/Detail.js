function Detail(props) {
  console.log(props)
  const key = props.match.params.key;
  return (
    <div>Detail {key}</div>
  )
}

export default Detail;