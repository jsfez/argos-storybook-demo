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
        gap: "30px",
      }}
    >
      {Array.from({ length: 1000 }, (_, i) => (
        <div
          key={i}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            height: "200px",
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            backgroundColor: i % 2 === 0 ? "#f0f0f0" : "#fff",
          }}
        >
          Item {i + 1}
        </div>
      ))}
    </div>
  ),
};
