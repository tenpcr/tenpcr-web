import Link from "next/link";

interface TabTypes {
  id: string;
  label: string;
  value: string;
}

const tabLists = [
  { id: "", label: "All", value: "" },
  {
    id: "43",
    label: "Web application",
    value: "web-application",
  },
  {
    id: "44",
    label: "Mobile application",
    value: "mobile-application",
  },
  {
    id: "45",
    label: "Wordpress",
    value: "wordpress",
  },
  {
    id: "46",
    label: "Artworks",
    value: "artworks",
  },
  {
    id: "47",
    label: "Videos",
    value: "videos",
  },
  {
    id: "48",
    label: "UX/UI",
    value: "ux-ui",
  },
  {
    id: "49",
    label: "Model 3d",
    value: "model-3d",
  },
  {
    id: "50",
    label: "Stickers",
    value: "stickers",
  },
  {
    id: "51",
    label: "Logos",
    value: "logos",
  },
  {
    id: "52",
    label: "Event & Organizer",
    value: "event-and-organizer",
  },
];

function PortfolioTabs({ tab }: { tab: string | string[] | undefined }) {
  return (
    <div className="border-[#e1e1e1] py-[10px] flex flex-wrap gap-[10px]">
      {tabLists?.map((tabItem: TabTypes, indexItem: number) => (
        <Link
          key={indexItem}
          href={
            tabItem.value === ""
              ? `/portfolio`
              : `/portfolio/category/${tabItem?.value}`
          }
        >
          <button
            className={`${
              tab === tabItem?.value
                ? "text-blue-500 border-blue-500 font-medium"
                : "bg-gray-50 border-transparent font-light hover:bg-gray-50 active:bg-gray-100 hover:border-blue-500 active:border-blue-600"
            } rounded-full min-w-[80px] border-2 py-[10px] px-[15px] text-[15px] cursor-pointer`}
          >
            {tabItem?.label}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default PortfolioTabs;
