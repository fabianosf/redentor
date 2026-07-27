import { Link } from 'react-router-dom'
import { companies } from '@/data'

export function Companies() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
        {companies.map((company) => (
          <div key={company.id} className="flex flex-col items-center">
            <Link to={company.href}>
              <img
                src={company.logoImage}
                alt={company.name}
                className="mx-auto w-3/5 h-auto"
                loading="lazy"
              />
            </Link>
            <h4 className="mt-3 text-base font-normal text-gray-700">
              {company.name}
            </h4>
          </div>
        ))}
      </div>

      <hr className="my-8 border-gray-200" />
    </div>
  )
}
