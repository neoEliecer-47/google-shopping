import { redirect } from "next/navigation";

type Props = {
  searchParams: any;
  params: {
    term: string;
  };
};

export default function SearchPage({ params: { term }, searchParams }: Props) {
  if(!term) redirect('/')
  return (
    <div>
      {/* results list */}
      results page here
    </div>
  );
}
