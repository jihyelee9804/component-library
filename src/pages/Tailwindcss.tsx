import * as D from '../data'

export default function Tailwindcss() {
    return (
        <div className="bg-black/70">
            <p>Tailwindcss</p>
            <p>{D.randomParagraphs(10)}</p>
            <button className="btn btn-primary" style={{textTransform: 'none'}}>
                Button
            </button>
        </div>
    )
}