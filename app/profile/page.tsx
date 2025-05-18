import UserProfile from "../../components/profile/user-profile";

export default function Profile() {
    return (
        <main className="w-full h-full mx-5 my-6">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <UserProfile />
        </main>
    );
}