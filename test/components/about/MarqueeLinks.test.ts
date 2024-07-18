import { AboutMarqueeLinks } from "#components";
import { techItems } from "~/constants/tech-items";
import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("MarqueeLinks component", () => {
  it("Should render all the items from the props provided", () => {
    const wrapper = mount(AboutMarqueeLinks, {
      props: {
        items: techItems,
        right: true,
      },
    });

    techItems.forEach((item, index) =>
      expect(wrapper.find(`#link-${index}`)?.attributes("href"))?.toBe(
        item.link,
      ),
    );
  });
});
