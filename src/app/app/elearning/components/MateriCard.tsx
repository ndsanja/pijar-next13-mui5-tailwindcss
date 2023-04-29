import { useRouter } from 'next/navigation';

const MateriCard = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/app/elearning/materi')}
      className="aspect-square bg-yellow-500 w-full flex items-center justify-center"
    >
      <p>Materi</p>
    </div>
  );
};
export default MateriCard;
