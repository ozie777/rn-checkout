import { Playground } from "@/components/Playground";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-[1200px] w-full mx-auto px-5 py-8">
      <h1 className="font-bold text-4xl mb-4">Request Checkout</h1>

      <div className="flex flex-col gap-2">
        <p>
          Request Checkout payment widget is a tool that allows websites to
          easily accept cryptocurrency payments.
        </p>
        <p>
          it's a pre-built component that handles all the complexities of
          blockchain transactions using Request Network, making it simple for
          businesses to offer crypto payment options without needing deep
          technical knowledge.
        </p>
        <p>
          The playground on this page lets you experiment with the widget
          firsthand. You can enter different values for the widget's properties,
          such as seller information, product details, and supported currencies.
          As you adjust these settings, you'll see how the widget responds in
          real-time. This interactive experience helps you understand how the
          widget works and how it might look and function on your own website.
        </p>
        <p>
          try out different configurations to see how versatile and
          user-friendly the Request Checkout payment widget can be for your
          customers!
        </p>
        <section className="flex flex-col">
          <h2 className="font-bold text-2xl my-4">Playground</h2>
          <Playground />
        </section>
      </div>
    </main>
  );
}
