import type { VideoItem } from "../data/videos";
import VideoCard from "./VideoCard";

export default function VideoGrid({
    items,
    onOpenIndex,
}: {
    items: VideoItem[];
    onOpenIndex: (i: number) => void;
}) {
    return (
        <div className="mt-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
                {items.map((v, i) => (
                    <VideoCard key={v.id} item={v} onOpen={() => onOpenIndex(i)} />
                ))}
            </div>
        </div>
    );
}
