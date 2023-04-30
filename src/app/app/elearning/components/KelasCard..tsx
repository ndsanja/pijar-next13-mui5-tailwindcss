import { useRouter } from 'next/navigation';

const KelasCard = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/app/elearning/kelas')}
      className="aspect-square bg-blue-500 w-full flex items-center justify-center"
    >
      <p>Kelas</p>
    </div>
  );
};
export default KelasCard;
