import "./CountComponent.css";
export default function CountComponent(props) {
  const num = props.num;
  const text = props.text;
  return (
    <div className="count-component">
      <h2>{num}</h2>
      <p>{text}</p>
    </div>
  );
}
