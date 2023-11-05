import { useImageSize } from 'react-image-size';

function Card({ product, ...props }) {
    const { mainImg, name, Category, createdAt } = product
    const [dimensions] = useImageSize(mainImg);
    const diff = (new Date().getTime() - new Date(createdAt).getTime()) / (1000 * 3600 * 24)

    return (
        <div className="card w-72 bg-white text-black shadow-2xl rounded-md border-2 border-gray-200" {...props}>
            <figure>
                <div className="w-full aspect-square overflow-hidden">
                    <img src={mainImg} alt={name} className={`object-cover ${dimensions?.width > dimensions?.height ? "h-full" : "w-full"}`} />
                </div>
            </figure>
            <div className="card-body py-3 px-4">
                <h2 className="card-title">
                    {name}
                </h2>
                <div className="card-actions justify-end py-3">
                    {diff < 30 && <div className="badge badge-outline badge-error">NEW</div>}
                    <div className="badge badge-outline">{Category.name}</div>
                </div>
            </div>
        </div>

    )
}

export default Card