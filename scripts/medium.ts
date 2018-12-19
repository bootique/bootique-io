import Axios from "axios";

const fs = require("fs");
const path = require("path");

interface MediumResponse {
  readonly payload: {
    readonly references: {
      readonly Post: {
        [id: string]: {
          readonly title: string;
          readonly firstPublishedAt: number;
          readonly uniqueSlug: string;
          readonly content: {
            readonly subtitle: string;
          }
          readonly virtuals: {
            readonly tags: {
              readonly name: string
            }[];
          }
        }
      }
    }
  }
}

const axios = Axios.create();
const mediumUrl = `https://medium.com/_/api/collections/12c8255d92fc/stream`;

async function main(limit: number = 10): Promise<MediumResponse> {
  try {
    const response = await axios.get<string>(mediumUrl, {
      params: {format: "json"}
    });
    const json: MediumResponse = JSON.parse(response.data.replace("])}while(1);</x>", ""));

    const posts = json.payload.references.Post;

    const data = Object.keys(posts)
      .map(it => posts[it])
      .sort((a, b) => b.firstPublishedAt - a.firstPublishedAt)
      .slice(0, limit)
      .map(({
              firstPublishedAt,
              title,
              uniqueSlug,
              content: {subtitle},
              virtuals: {tags}
      }) => ({
        title,
        subtitle,
        publishedAt: firstPublishedAt,
        tags: tags.map(tag => tag.name),
        url: uniqueSlug
      }));

    fs.writeFileSync(
      path.resolve(__dirname, "..", "data", "medium.json"),
      JSON.stringify(data),
      {encoding: "UTF-8"}
    );

    return json;
  } catch (e) {
    return Promise.reject(e);
  }
}

console.log("Fetching feed from Medium.");
main(3).then(() => {
  console.log("Fetching feed from Medium. Done.");
}, (e: Error) => {
  console.error(e);
  process.exit(1);
});
