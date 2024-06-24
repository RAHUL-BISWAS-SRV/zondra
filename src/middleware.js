// middleware.js
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';


export function middleware(request) {

  const path =  request.nextUrl.pathname;
  const isPublicPath = path === "/login" ||  path === "/";

  const authToken = request.cookies.get('authToken') || '';

  if (authToken && isPublicPath) {
    return NextResponse.redirect(new URL('/tasks', request.url));
  }
  if (!authToken && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/', '/tasks', '/profile', '/login', '/about'],
};
