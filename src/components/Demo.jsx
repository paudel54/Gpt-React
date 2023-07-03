import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  // for lazyfunction , 1st parameter is fn and 2nd an object
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // making API request
  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("Clicked button for API call");
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);
      console.log(newArticle);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Implementing userSearch handling forms */}
      <div className="flex flex-col w-full gap-2 ">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ⬅️
          </button>
        </form>
        {/* Browse URL History */}
      </div>
      {/* Display Results */}
    </section>
  );
};

export default Demo;
