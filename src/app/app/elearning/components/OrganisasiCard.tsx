'use client';

import { useRouter } from 'next/navigation';

const OrganisasiCard = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/app/elearning/organisasi')}
      className="aspect-square bg-red-500 w-full flex items-center justify-center"
    >
      <p>organisasi</p>
    </div>
  );
};
export default OrganisasiCard;
