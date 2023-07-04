export namespace reddit {
  export interface Story {
    data: {
      all_awardings: Array<{
        description: string;
        icon_url: string;
        is_enabled: boolean;
        name: string;
        resized_icons: Array<{
          height: number;
          width: number;
          url: string;
        }>;
      }>;
      secure_media : {
        reddit_video : {
          fallback_url : string;
          is_gif: boolean;
        };
      };
      author: string;
      created_utc: number;
      id: string;
      score: number;
      title: string;
      url: string;
      is_self: boolean;
      is_video: boolean;
    };
    kind: "t3";
  }

  export interface RedditVideoProps {
    id : string;
    sourceUrl : string;
  }

  export interface Subreddit {
    data: {
      display_name: string;
      id: string;
      subscribers: number;
      title: string;
      url: string;
    };
    kind: "t5";
  }

  export interface ResponseStories {
    data: {
      children: Array<Story>;
    };
    kind: "Listing";
  }

  export interface ResponseSubreddits {
    data: {
      children: Array<Subreddit>;
    };
    kind: "Listing";
  }
}
