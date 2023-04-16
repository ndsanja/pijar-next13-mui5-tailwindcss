'use client';
import TimelineCard from './components/TimelineCard';
import AgendaCard from './components/AgendaCard';

const AppPageClient = () => {
  return (
    <div className="relative flex w-full">
      <div className="hidden lg:block sticky top-[90px] min-h-screen max-h-screen overflow-y-auto w-[250px] border-r bg-blue-200"></div>
      <div className="flex flex-col">
        <div className="flex px-4 py-2 gap-4 w-full max-w-[100vw] !overflow-x-auto">
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
          <AgendaCard />
        </div>
        <div className="px-4 flex flex-col w-full !overflow-x-hidden max-w-[100vw] space-y-8 mt-4">
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
        </div>
      </div>
      <div className="hidden lg:block sticky top-[90px] min-h-screen max-h-screen overflow-y-auto w-[250px] border-l bg-blue-200"></div>
    </div>
  );
};
export default AppPageClient;
