export type VideoCategory = "Talking Head" | "Reels & Shorts" | "Motion Graphics" | "3D Animations" | "Events Edits" | "Long Form";

export interface PortfolioVideo {
    id: string;
    youtubeId: string;
    category: VideoCategory;
}

export const portfolioVideos: PortfolioVideo[] = [
    // Talking Head (Vertical)
    { id: "1", youtubeId: "i_WNsnXE6ao", category: "Talking Head" }, // random YT ids, will be replaced
    { id: "2", youtubeId: "fhdl9xReCao", category: "Talking Head" },
    { id: "3", youtubeId: "jTIUfW_Vo8M", category: "Talking Head" },
    { id: "4", youtubeId: "L68KS9mQ__M", category: "Talking Head" },
    { id: "5", youtubeId: "qYMcHeKr1Ws", category: "Talking Head" },
    { id: "6", youtubeId: "e3Mtem4P-wA", category: "Talking Head" },
    { id: "7", youtubeId: "GDvfqtp_yxw", category: "Talking Head" },
    { id: "8", youtubeId: "xlZKrYSMzs4", category: "Talking Head" },
    { id: "9", youtubeId: "tzQek5ILzBM", category: "Talking Head" },
    { id: "10", youtubeId: "7Fni489cNZg", category: "Talking Head" },
    { id: "11", youtubeId: "zH1VkmwzMLg", category: "Talking Head" },
    { id: "12", youtubeId: "uMnss7wiIfg", category: "Talking Head" },
    { id: "13", youtubeId: "abJvOARUTZ0", category: "Talking Head" },
    { id: "14", youtubeId: "xBFkMWLsMbg", category: "Talking Head" },
    { id: "15", youtubeId: "5jgdDRt0l7o", category: "Talking Head" },

    // Reels & Shorts (Vertical)
    { id: "5", youtubeId: "sn4jxs8ocS8", category: "Reels & Shorts" },
    { id: "6", youtubeId: "mgrmdiUq_4k", category: "Reels & Shorts" },
    { id: "7", youtubeId: "8s7vTJWFaac", category: "Reels & Shorts" },
    { id: "8", youtubeId: "3kwXHTjzlSg", category: "Reels & Shorts" },
    { id: "9", youtubeId: "WMFOAbT9lG0", category: "Reels & Shorts" },

    // Motion Graphics (Horizontal)
    { id: "9", youtubeId: "MzEFeIRJ0eQ", category: "Motion Graphics" },
    { id: "10", youtubeId: "MzEFeIRJ0eQ", category: "Motion Graphics" },
    { id: "11", youtubeId: "MzEFeIRJ0eQ", category: "Motion Graphics" },

    // 3D Animations (Horizontal)
    { id: "12", youtubeId: "MzEFeIRJ0eQ", category: "3D Animations" },
    { id: "13", youtubeId: "MzEFeIRJ0eQ", category: "3D Animations" },

    // Events Edits (Horizontal)
    { id: "14", youtubeId: "MzEFeIRJ0eQ", category: "Events Edits" },
    { id: "15", youtubeId: "MzEFeIRJ0eQ", category: "Events Edits" },

    // Long Form (Horizontal)
    { id: "16", youtubeId: "MzEFeIRJ0eQ", category: "Long Form" },
    { id: "17", youtubeId: "MzEFeIRJ0eQ", category: "Long Form" },
];

export const categories: VideoCategory[] = [
    "Talking Head",
    "Reels & Shorts",
    "Motion Graphics",
    "3D Animations",
    "Events Edits",
    "Long Form"
];
