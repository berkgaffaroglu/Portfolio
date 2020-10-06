from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
    path('project-list/', views.projectList, name="project-list"),
    path('project-detail/<slug:slug>', views.projectDetail, name="project-detail"),
    path('search/<str:keyword>', views.searchProjects, name='search-projects'),
    path('contact/', views.Contact, name='contact'),
    path('general-information/', views.generalInformation, name='general-information')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
