from django.urls import path, re_path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
    re_path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
    path('project-list/', views.projectList, name="project-list"),
    path('project-detail/<slug:slug>', views.projectDetail, name="project-detail"),
    path('search/<str:keyword>', views.searchProjects, name='search-projects'),
    path('contact/', views.Contact, name='contact'),
    path('general-information/', views.generalInformation, name='general-information')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if not settings.DEBUG: urlpatterns += [ re_path(r'^uploads/(?P<path>.)$', serve,{'document_root': settings.MEDIA_ROOT}), re_path(r'^static/(?P<path>.)$', serve,{'document_root': settings.STATIC_ROOT}), ]