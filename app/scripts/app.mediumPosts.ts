import {DateTime} from "luxon";

// Medium Posts feed manually parse
export function mediumPosts() {

  // XML parsing with namespaces
  $.fn.filterNode = function (name: string): JQuery {
    return this.find("*").filter(function () {
      return this.nodeName === name;
    });
  };

  const mediumPostsContainer = $("#medium-posts");
  if (mediumPostsContainer.length) {

    let feed = mediumPostsContainer.data("medium-feed-url");

    // CORS workaround if localhost
    if (window.location.hostname == "localhost") {
      feed = feed.replace(feed, `https://cors-anywhere.herokuapp.com/${feed}`);
    }

    $.ajax(feed, {
      accepts: {
        xml: "application/rss+xml"
      },
      dataType: "xml",
      success: function (data) {
        // Limit number of posts
        const numberOfItems = 3;

        if ($(data).find("item").length) {
          // limit entry
          const limitedEntry = $(data).find("item").slice(0, numberOfItems);

          limitedEntry.each(function () {
            const xml = `<rss version="2.0">${$(this).html()}</rss>`;

            const el = $.parseXML(xml);

            const itemTitle = $(el).find("title").text();
            const itemLink = $(el).find("link").text();

            // parse `xml with namespaces`; tags cut; shortened to 120 symbols
            const itemDesc = $(el).filterNode("content:encoded")
              .text()
              .replace(/<\/?[^>]+>/gi, "")
              .slice(0, 120);

            const itemCategories = $(el).find("category").toArray().map(function (element) {
              return `<span class="badge badge-secondary">${$(element).text()}</span>`;
            }).join("");

            const itemDate = DateTime.fromRFC2822($(el).find("pubDate").text()).toFormat("dd MMMM");

            const entryItem = `
              <a href="${itemLink}" class="list-group-item d-flex flex-column align-items-start">
                <h5 class="mb-3">${itemTitle}</h5>
                <p class="mb-2_5">${itemDesc}...</p>
                <div class="list-group-item-footer w-100  d-flex flex-column flex-sm-row justify-content-between  text-muted small">
                  <div class="medium-counters">${itemCategories}</div>
                  <span class="text-uppercase text-bold text-nowrap  mt-2 mt-sm-0">${itemDate}</span>
                </div>
              </a>
            `;

            mediumPostsContainer.append(entryItem);
          });
        }
      }
    }).fail((textStatus: any) => {
      console.log(`
        ---------------------------------------------------------------------------
        Fail to get requested url: ${feed}
        Status Code: ${textStatus.status }, Status Text: ${textStatus.statusText}
      `);
    });
  }
}
