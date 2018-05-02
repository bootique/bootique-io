// Formating posts date
import * as moment from 'moment';

// Medium Posts feed manualy parse
export function feedMeduimPosts() {

  // XML parsing with namespaces
  $.fn.filterNode = function(name) {
    return this.find('*').filter(function() {
      return this.nodeName === name;
    });
  };

  const meduimPostsContainer = $('#medium-posts');
  if (meduimPostsContainer.length) {

    var feed = meduimPostsContainer.data('medium-feed-url');

    // CORS workaround if localhost
    if (window.location.hostname == 'localhost') {
      feed = feed.replace(feed, 'https://cors-anywhere.herokuapp.com/' + feed);
    }

    $.ajax(feed, {
      accepts: {
        xml: "application/rss+xml"
      },
      dataType: "xml",
      success: function(data) {
        // Limit number of posts
        const numberOfItems = 3;

        if ($(data).find("item").length) {
          // limit entry
          var limitedEntry = $(data).find("item").slice(0, numberOfItems);

          limitedEntry.each(function() {
            var eli = "<rss version='2.0'>" + $(this).html() + "</rss>",
              itemTitle,
              itemLink,
              itemDesc,
              itemCategories = '',
              itemDate;

            const el = $.parseXML(eli);

            itemTitle = $(el).find('title').text();
            itemLink = $(el).find('link').text();
            itemDesc = $(el).filterNode('content:encoded').text().replace(/<\/?[^>]+>/gi, '').slice(0, 120); // parse `xml with namespaces`; tags cut; shortened to 120 symbols
            $(el).find('category').each(function() {
              itemCategories += '<span class="badge badge-secondary">' + $(this).text() + '</span>';
            });

            itemDate = moment($(el).find('pubDate').text()).format('DD MMMM'); // formated with moment.js

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

            meduimPostsContainer.append(entryItem);

          });
        }
      }
    }).fail(function(textStatus) {
      console.log('---------------------------------------------------------------------------\n' +
        'Fail to get requested url: ' + feed + '\n' +
        'Status Code: ' + textStatus.status + ', Status Text: ' + textStatus.statusText);
    });
  }
}
