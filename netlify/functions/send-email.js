import handler from "../../api/send-email.js";

export default async (req, context) => {
  return new Promise(async (resolve) => {
    let body = {};
    if (req.body) {
      try {
        body = await req.json();
      } catch (e) {
        body = {};
      }
    }

    const mockRes = {
      statusCode: 200,
      headers: {},
      setHeader(k, v) { this.headers[k] = v; },
      status(code) { this.statusCode = code; return this; },
      json(data) {
        resolve(new Response(JSON.stringify(data), {
          status: this.statusCode,
          headers: { ...this.headers, "Content-Type": "application/json" }
        }));
      },
      end() {
        resolve(new Response(null, { status: this.statusCode, headers: this.headers }));
      }
    };

    const mockReq = {
      method: req.method,
      body: body
    };

    await handler(mockReq, mockRes);
  });
};
