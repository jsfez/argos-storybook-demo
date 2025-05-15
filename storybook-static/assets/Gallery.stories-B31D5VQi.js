import{j as r}from"./jsx-runtime-D_zvdyIk.js";const a={title:"Example/Gallery",tags:["autodocs"]},e={render:()=>r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"30px"},children:Array.from({length:1e3},(s,n)=>r.jsxs("div",{style:{padding:"10px",border:"1px solid #ccc",height:"200px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",backgroundColor:n%2===0?"#f0f0f0":"#fff"},children:["Item ",n+1]},n))})};var t,o,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px"
  }}>
      {Array.from({
      length: 1000
    }, (_, i) => <div key={i} style={{
      padding: "10px",
      border: "1px solid #ccc",
      height: "200px",
      width: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      backgroundColor: i % 2 === 0 ? "#f0f0f0" : "#fff"
    }}>
          Item {i + 1}
        </div>)}
    </div>
}`,...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const l=["LongStory"];export{e as LongStory,l as __namedExportsOrder,a as default};
