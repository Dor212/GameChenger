export type CategoryKey = "shootdays" | "branding";

export type VideoItem = {
  id: string;
  title: string;
  category: CategoryKey;
  src: string;
  thumb: string;
};

export const categories: Record<CategoryKey, { label: string; accent: string }> = {
  shootdays: { label: "ימי צילום", accent: "#57F2C2" },
  branding: { label: "סרטוני תדמית", accent: "#FF4FD8" },
};

const CLOUD_NAME =
  (import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string | undefined)?.trim() || "dtjr9qzet";

const VIDEO_TRANSFORMS =
  (import.meta.env.VITE_CLOUDINARY_VIDEO_TRANSFORMS as string | undefined)?.trim() ||
  "f_mp4,vc_h264,ac_aac,q_auto:good";

const cloudinaryVideoUrl = (publicId: string) => {
  const base = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload`;
  const tr = VIDEO_TRANSFORMS ? `/${VIDEO_TRANSFORMS}` : "";
  return `${base}${tr}/${publicId}.mp4`;
};

const cloudinaryPosterUrl = (publicId: string) => {
  const base = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload`;
  return `${base}/so_0,f_jpg,q_auto/${publicId}.jpg`;
};

const buildCategory = (category: CategoryKey, count: number) =>
  Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    const publicId = `${category}${n}`;
    return {
      id: `${category}-${String(n).padStart(2, "0")}`,
      title: `${category} ${n}`,
      category,
      src: cloudinaryVideoUrl(publicId),
      thumb: cloudinaryPosterUrl(publicId),
    } as VideoItem;
  });

export const videos: VideoItem[] = [
  ...buildCategory("shootdays", 16),
  ...buildCategory("branding", 4),
];
