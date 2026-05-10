"use client";

import { useState } from "react";
import { supabase } from "../supabase";
// 방금 만든 supabase 연결 파일을 불러와

export default function PostPage() {
  const [projectName, setProjectName] = useState("");
  const [field, setField] = useState("");
  const [roles, setRoles] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  // loading은 제출 중일 때 버튼을 비활성화하기 위한 변수야

  const handleSubmit = async () => {
    // 빈 칸이 있으면 제출 막기
    if (!projectName || !field || !roles || !description || !contact) {
      alert("모든 항목을 입력해주세요!");
      return;
    }

    setLoading(true);

    // Supabase posts 테이블에 데이터 저장
    const { error } = await supabase.from("posts").insert({
      project_name: projectName,
      field: field,
      roles: roles,
      description: description,
      contact: contact,
    });

    setLoading(false);

    if (error) {
      alert("등록 중 오류가 발생했어요. 다시 시도해주세요.");
      console.error(error);
    } else {
      alert("구인글이 등록되었습니다!");
      // 입력창 초기화
      setProjectName("");
      setField("");
      setRoles("");
      setDescription("");
      setContact("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-indigo-600">TeamMate</a>
          <nav className="flex items-center gap-4">
            <a href="/list" className="text-gray-600 hover:text-indigo-600 transition-colors">팀원 찾기</a>
            <a href="/post" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">팀원 구하기</a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">팀원 구인글 등록</h1>
          <p className="text-gray-500 mb-8">함께할 팀원을 찾고 있나요? 팀을 소개하고 팀원을 모집해보세요!</p>

          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">프로젝트 이름 *</label>
              <input
                type="text"
                placeholder="예) AI 기반 중고거래 플랫폼"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">서비스 분야 *</label>
              <input
                type="text"
                placeholder="예) 이커머스, 헬스케어, 에듀테크"
                value={field}
                onChange={(e) => setField(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">모집 역할 *</label>
              <input
                type="text"
                placeholder="예) 백엔드 개발자, 디자이너"
                value={roles}
                onChange={(e) => setRoles(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">팀 소개 *</label>
              <textarea
                placeholder="팀과 프로젝트를 소개해주세요."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">연락처 *</label>
              <input
                type="text"
                placeholder="예) kakao: startup_kim / email: hello@gmail.com"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-9