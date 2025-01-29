import { DeveloperService } from "@/lib/services/developer/DeveloperService";

export default async function Home() {
  const developer = await DeveloperService.getDeveloper();

  return (
    <>
      <p>{developer.name}</p>
    </>
  );
}
