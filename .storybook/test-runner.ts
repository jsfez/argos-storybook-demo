import type { TestRunnerConfig } from "@storybook/test-runner";
import { argosScreenshot } from "@argos-ci/storybook";

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
      const element = document.querySelector(".sb-main");
      if (element) {
        element.scrollTo({
          top: element.scrollHeight,
          behavior: "smooth",
        });
      }
    });
    await argosScreenshot(page, context, { fitToContent: false });
  },
};

export default config;
