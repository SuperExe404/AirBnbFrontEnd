import Image from "next/image";

const PropertylistItem = () => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image 
                fill
                src='/beach_1.jpg'
                sizes="(max-width: 768px) 768px, (max-width:1200px): 768px, 768px"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="Beach house"
                />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">Propety Name</p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>$200</strong></p>
            </div>
        </div>
    )
}

export default PropertylistItem;