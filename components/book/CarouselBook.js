import React from 'react'

export default function CarouselBook() {
  return (
    <>
      <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-0.5 css-pral3">
        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-7 css-15k97em">
          <div className="MuiBox-root css-1cls4uu" data-index={0}>
            <img
              className="MuiBox-root css-i8qesu"
              src="https://storage.googleapis.com/rakuten-camp-pro-assets/uploads%2F53bcecbee5475e84a943e6987318af87.jpeg"
              alt="釣りや焚き火、ブッシュクラフトも楽しめる 御岳山と川が望めるフリーサイトとオートキャンプ場「トラウトキャンプソロー 」"
            />
            <div
              className="hover-effect MuiBox-root css-0"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/rakuten-camp-pro-assets/uploads%2F53bcecbee5475e84a943e6987318af87.jpeg")',
              }}
            ></div>
          </div>
        </div>
        <div className="MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-0.5 MuiGrid-grid-xs-5 css-1q73sap">
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-1iwffko">
            <div className="MuiBox-root css-fv8a9y" data-index={1}>
              <img
                className="MuiBox-root css-i8qesu"
                src="https://storage.googleapis.com/rakuten-camp-pro-assets/uploads%2F8a604d5ca466f9826fe2291e020dee7c.jpeg"
              />
              <div
                className="hover-effect MuiBox-root css-0"
                style={{
                  backgroundImage:
                    'url("https://storage.googleapis.com/rakuten-camp-pro-assets/uploads%2F8a604d5ca466f9826fe2291e020dee7c.jpeg")',
                }}
              ></div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-mcn0ra">
            <div className="MuiBox-root css-17isezj" data-index={2}>
              <img
                className="MuiBox-root css-i8qesu"
                src="https://storage.googleapis.com/rakuten-camp-pro-assets/uploads%2F4a93c83dd1c56d6cb002f94a44b13e5a.jpeg"
                alt="キャンプサイト入口付近"
              />
              <div
                className="hover-effect MuiBox-root css-0"
                style={{
                  backgroundImage:
                    'url("https://storage.googleapis.com/rakuten-camp-pro-assets/uploads%2F4a93c83dd1c56d6cb002f94a44b13e5a.jpeg")',
                }}
              ></div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-mcn0ra">
            <div className="MuiBox-root css-17isezj" data-index={3}>
              <img
                className="MuiBox-root css-i8qesu"
                src="https://storage.googleapis.com/rakuten-camp-pro-assets/uploads%2Fef506eff0706fe9fd5ac144dd34a6e89.jpeg"
                alt="夏の全体俯瞰"
              />
              <div
                className="hover-effect MuiBox-root css-0"
                style={{
                  backgroundImage:
                    'url("https://storage.googleapis.com/rakuten-camp-pro-assets/uploads%2Fef506eff0706fe9fd5ac144dd34a6e89.jpeg")',
                }}
              ></div>
              <div className="MuiBox-root css-1l2u3bx">
                <div className="MuiTypography-root MuiTypography-h3 css-1y0j2ca">
                  +32<span className="MuiBox-root css-u5d1ce">枚の写真</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .MuiGrid-root {
            display: flex;
            flex-wrap: wrap;
          }

          .MuiGrid-container {
            display: flex;
            gap: 0.5rem;
          }

          .MuiGrid-item {
            padding: 0.5rem;
          }

          .MuiGrid-grid-xs-7 {
            flex-basis: 58.3333%;
          }

          .MuiGrid-grid-xs-5 {
            flex-basis: 41.6667%;
          }

          .MuiGrid-grid-xs-12 {
            flex-basis: 100%;
          }

          .MuiGrid-grid-xs-6 {
            flex-basis: 50%;
          }

          .MuiBox-root {
            position: relative;
            width: 100%;
            padding-top: 75%; /* 4:3 aspect ratio */
            background-color: #f0f0f0;
            overflow: hidden;
          }

          .MuiBox-root img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .hover-effect {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .MuiBox-root:hover .hover-effect {
            opacity: 0.7;
          }

          .css-1l2u3bx {
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.6);
            padding: 0.5rem;
            color: white;
            text-align: center;
          }

          .css-1y0j2ca {
            font-size: 1.2rem;
            font-weight: bold;
          }

          .css-u5d1ce {
            font-size: 0.8rem;
            margin-left: 0.2rem;
          }

          @media (min-width: 1536px) {
            .css-15k97em {
              flex-basis: 58.3333%;
              -webkit-box-flex: 0;
              flex-grow: 0;
              max-width: 58.3333%;
            }
          }
          @media (min-width: 1200px) {
            .css-15k97em {
              flex-basis: 58.3333%;
              -webkit-box-flex: 0;
              flex-grow: 0;
              max-width: 58.3333%;
            }
          }
          @media (min-width: 1024px) {
            .css-15k97em {
              flex-basis: 58.3333%;
              -webkit-box-flex: 0;
              flex-grow: 0;
              max-width: 58.3333%;
            }
          }
          @media (min-width: 900px) {
            .css-15k97em {
              flex-basis: 58.3333%;
              -webkit-box-flex: 0;
              flex-grow: 0;
              max-width: 58.3333%;
            }
          }
          @media (min-width: 710px) {
            .css-15k97em {
              flex-basis: 58.3333%;
              -webkit-box-flex: 0;
              flex-grow: 0;
              max-width: 58.3333%;
            }
          }
          @media (min-width: 600px) {
            .css-15k97em {
              flex-basis: 58.3333%;
              -webkit-box-flex: 0;
              flex-grow: 0;
              max-width: 58.3333%;
            }
          }
        `}
      </style>
    </>
  )
}
