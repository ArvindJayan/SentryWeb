import GoogleTag from "@/components/google-tag/google-tag";
import UserProfile from "../../components/profile/user-profile";

export default function Profile() {
  return (
    <main className="w-full h-full mx-5 my-6">
      <GoogleTag />
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <UserProfile />
    </main>
  );
}
