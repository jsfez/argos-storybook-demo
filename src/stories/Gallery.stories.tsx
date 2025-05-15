import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Gallery",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const LongStory: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {Array.from({ length: 2000 }, (_, i) => (
        <div
          key={i}
          style={{ padding: "10px", border: "1px solid #ccc", height: "300px" }}
        >
          Gallery item {i + 1}
        </div>
      ))}
    </div>
  ),
};
