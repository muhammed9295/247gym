'use client';

import dynamic from 'next/dynamic';

const Trainer = dynamic(() => import('./Trainer'), {
  ssr: false,
  loading: () => <div className="w-full bg-[#13121A] py-16 px-4">Loading trainers...</div>
});

export default function TrainerWrapper() {
  return <Trainer />;
} 