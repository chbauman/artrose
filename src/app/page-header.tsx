export function PageHeader({
  title,
  subtitle,
}: Readonly<{ title: string; subtitle?: string }>) {
  return (
    <div className="bg-gray-900 dark:bg-black text-center py-14 px-4">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
        {title}
      </h1>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand" />
      {subtitle && (
        <p className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
