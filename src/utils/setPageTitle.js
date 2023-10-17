const routeMetadata = {
  "/home": {
    title: "Home Page",
    description: "Description for the home page",
    keywords: "home, page, keywords",
  },
  "/about": {
    title: "About Us",
    description: "Learn more about our company",
    keywords: "about, us, company",
  },
};

export const setPageTitle = (pathname) => {
  setMetadata(routeMetadata[pathname]);
};

function setMetadata(metadata) {
  const {
    title = "Default Page Title",
    description = "Default page description",
    keywords = "default, keywords",
  } = metadata || {};

  document.title = title;

  const descriptionMetaTag = document.querySelector('meta[name="description"]');
  if (descriptionMetaTag) {
    descriptionMetaTag.setAttribute("content", description);
  } else {
    const newDescriptionMetaTag = document.createElement("meta");
    newDescriptionMetaTag.setAttribute("name", "description");
    newDescriptionMetaTag.setAttribute("content", description);
    document.head.appendChild(newDescriptionMetaTag);
  }

  const keywordsMetaTag = document.querySelector('meta[name="keywords"]');
  if (keywordsMetaTag) {
    keywordsMetaTag.setAttribute("content", keywords);
  } else {
    const newKeywordsMetaTag = document.createElement("meta");
    newKeywordsMetaTag.setAttribute("name", "keywords");
    newKeywordsMetaTag.setAttribute("content", keywords);
    document.head.appendChild(newKeywordsMetaTag);
  }
}
