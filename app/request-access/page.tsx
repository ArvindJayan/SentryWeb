import { RequestPermission } from "@/components/permission/requestPermissionCard";

export default async function RequestAccessPage() {
    return (
        <main className='flex w-full h-full flex-row'>
            <div className='flex-1'>
                <div className="flex h-full w-full items-center justify-center p-6 md:p-10">
                    <div className="border rounded-lg text-center">
                        <RequestPermission />
                    </div>
                </div>
            </div>
        </main>
    );
}