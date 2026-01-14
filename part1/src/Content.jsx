import Part from './Part'

export default function Content(props) {
    const parts = props.course['parts']
  return (
    <div>
        {
            parts.map(part => 
                <Part key={part.name} parts={part} />
            )
        }
    </div>
  )
}
