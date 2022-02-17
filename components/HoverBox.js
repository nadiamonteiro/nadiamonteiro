export default function HoverBox(props) {
    return (
        <div>
            <img src={props.img} alt={props.title} />
            <h4><b>{props.title}</b></h4>
        </div>
    )
}