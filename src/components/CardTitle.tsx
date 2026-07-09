interface CardTitleProps {
    label: string;
    title: string;
    spanTitle: string;
    description: string;
    titleColor: string;
    descriptionColor: string;
}


export default function CardTitle({ label, title, spanTitle, description , titleColor, descriptionColor} : CardTitleProps){
    return (
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm mb-4 group hover:border-white/[0.2] transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              <span className={`text-[11px] font-semibold tracking-[0.18em] uppercase group-hover:text-white transition-colors duration-300 .force-dark-card ${titleColor}`}>
                {label}
              </span>
            </div>

            <h2 className={`h-section leading ${titleColor}`}>
              {title}{" "}
              <span className="gradient-text relative">
                {spanTitle}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className={`body-base ${descriptionColor} max-w-md lg:ml-auto`}>
              {description}
            </p>
          </div>
        </div>
    )
}

