interface AffixOptions {
  offset: {
    top?: () => number | number;
    bottom?: number;
  }
}

interface JQuery {
  affix(options: AffixOptions): JQuery;
}
