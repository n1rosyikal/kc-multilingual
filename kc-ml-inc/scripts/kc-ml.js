jQuery(document).ready(function(c){var b=c("body"),a=c("div.kcml-wrap");if(!b.hasClass("media-php")&&!c("#media-items").length){a.closest("td").attr("colspan",2).siblings("th").remove();a.siblings("label").remove()}c("#addtag").on("kcsRefreshed",function(){var d=c(this);d.find("div.kcml-wrap").siblings("label").remove()})});