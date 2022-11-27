// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//Rest API - Get, Post, Put, Delete
//Request Object - from client to server -- req - type, body, headers, query, params
//Response Object - from server to client -- res - data, status, headers


//baseurl/api/hello
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
