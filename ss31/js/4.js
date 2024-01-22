function truacate(str, a) {
    if (str.leagth <= a) {
      return str;
    }
    return str.slice(0, a) + "...";
  }
  coasole.log(truacate("Hello world, I'm Peter", 11));
  