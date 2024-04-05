import { Input } from "../../theme/daisyui"

export default function Color() {
    return (
        <section className='mt-4'>
            <h2 className='font-bold text-3xl text-center'>Color</h2>
            <div className='mt-4 flex justify-evenly'>
                <input className="input input-primary" />
                <Input className="input-primary" />
            </div>
        </section>
    )
}