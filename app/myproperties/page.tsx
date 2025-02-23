import Image from "next/image";
import Propertylist from "../components/properties/PropertyList";

const MyPropertiesPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
                <h1 className="text-2xl my-6">My Properties</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Propertylist />
                </div>
        </main>
    )
}

export default MyPropertiesPage;